import { Payment, columns } from "./columns"
import { DataTable } from "@/components/ui/DataTable"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "hahaaaaaaaaaaaaaaahahha@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "a@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "n@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "q@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "c@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "y@example.com",
        },
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
