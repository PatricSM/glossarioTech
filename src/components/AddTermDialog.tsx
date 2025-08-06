import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { AddTermForm } from './AddTermForm'
import { PlusCircle } from 'lucide-react'

export const AddTermDialog = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline">
          <PlusCircle className="mr-2 h-5 w-5" />
          Adicionar Novo Termo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Termo</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para adicionar um novo termo ao glossário.
          </DialogDescription>
        </DialogHeader>
        <AddTermForm onFinished={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
