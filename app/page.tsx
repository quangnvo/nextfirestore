"use client"

import { useState, useEffect } from "react"
import { collection, addDoc, getDoc, QuerySnapshot, query, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { log } from "console";
import { DataTable } from "@/components/ui/DataTable";
import { Payment, columns } from "@/constants/columns";

export default function Home() {

  const [items, setItems] = useState([
    { name: "Item 1", price: 100 },
    { name: "Item 2", price: 200 },
    { name: "Item 3", price: 300 },
  ])

  const [total, setTotal] = useState(0)
  const [newItem, setNewItem] = useState({ name: "", price: "" })

  // Add item to database 
  const addItem = async (e: any) => {
    e.preventDefault()
    if (newItem.name !== "" && newItem.price !== "") {
      // setItems([...items, newItem])
      await addDoc(collection(db, "items"), {
        name: newItem.name.trim(),
        price: newItem.price
      })
      setNewItem({ name: "", price: "" })
    } else {

    }
  }

  // Read items from database
  useEffect(() => {
    const q = query(collection(db, "items"))
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let itemsArr: any[] = []

      QuerySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id })
      })
      setItems(itemsArr)

      // Read total from database
      const calculateTotal = () => {
        const totalPrice = itemsArr.reduce((sum, item) => sum + parseFloat(item.price), 0)
        setTotal(totalPrice)
      }
      calculateTotal()
      return () => unsubscribe()
    })

  }, [])

  // Delete item from database
  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, "items", id))
  }



  return (
    <main className="max-w-7xl mx-auto flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm">
        <h1 className="text-4xl p-4 text-center">
          Expense tracker
        </h1>
        <div className="bg-slate-50 p-4 rounded-lg">
          <form className="grid grid-cols-6 items-center">

            {/* Name */}
            <input
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              type="text"
              className="col-span-3 p-3 border"
              placeholder="Enter item"
            />

            {/* Price */}
            <input
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              type="text"
              className="col-span-2 p-3 border mx-3"
              placeholder="Enter $"
            />

            {/* Button Add */}
            <button
              className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl"
              type="submit"
              onClick={addItem}
            >
              +
            </button>
          </form>

          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className="my-4 w-full flex justify-between"
              >
                <div className="p-4 w-full flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>

                {/* Button Delete, ở đây báo lỗi id nhưng vậy chạy được */}
                <button
                  onClick={() => deleteItem(item.id)}
                  className="ml-8 p-4 border-l-2 w-16"
                >
                  X
                </button>
              </li>
            ))}
          </ul>

          {items.length < 1 ? ("") : (
            <div className="flex justify-between p-3">
              <span>Total</span>
              <span>${total}</span>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
