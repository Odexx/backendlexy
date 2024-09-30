'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";

export default function page() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(users => setUsers(users))  
  }, [])
  

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

  const getUsers = async () => {
    const response = await fetch('/api/users', {
      method: 'GET'
    })
    if (response.statusText !== 'ok'){
      console.log('la wea peto')
    }
    const json = await response.json();
    console.log(json)
    return json;
  }
  

  return (
    <>
      <header className="bg-slate-500 flex justify-end lg:py-8 py-4 px-8">
        <div className="flex items-start gap-4">
          <img className="size-16" src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" />
          <div className="flex flex-col">
          <span>
            Juan
          </span>
          <Button>
            Cerrar sesion
          </Button>
          </div>
        </div>
      </header>
      <main className="min-h-screen bg-slate-300 flex gap-12">
      <aside className="flex-[2] bg-white lg:ml-8 p-8">
        <h2 className="text-2xl font-semibold text-slate-900 py-2 text-center">Listado de Abogados</h2>
        <Input placeholder="Buscar..." />
         <Accordion type="single" collapsible>  {/* classname= "h-10 overflow-auto"*/}
          {users.map(user => (
              <AccordionItem key={user.id} value={user.id}>
              <AccordionTrigger>{user.nombre}</AccordionTrigger>
              <AccordionContent>
                {user.rol}
              </AccordionContent>
            </AccordionItem>
          ))}
</Accordion>
        </aside>
        <div className="flex-[8] bg-white p-8">
        <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
        </div>
      </main>
    </>
  )
}
