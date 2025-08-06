import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTerms } from '@/contexts/TermsContext'
import { useToast } from '@/components/ui/use-toast'
import { termCategories } from '@/data/terms'

const formSchema = z.object({
  term: z.string().min(1, { message: 'O nome do termo é obrigatório.' }),
  category: z.string().min(1, { message: 'A categoria é obrigatória.' }),
  explanation: z.string().min(1, { message: 'A descrição é obrigatória.' }),
})

type AddTermFormProps = {
  onFinished: () => void
}

export const AddTermForm = ({ onFinished }: AddTermFormProps) => {
  const { addTerm } = useTerms()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      term: '',
      category: '',
      explanation: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    addTerm(values)
    toast({
      title: 'Sucesso!',
      description: 'Termo adicionado com sucesso!',
    })
    form.reset()
    onFinished()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="term"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Termo</FormLabel>
              <FormControl>
                <Input placeholder="Ex: API" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {termCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Explique o que o termo significa..."
                  className="resize-none"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onFinished}>
            Cancelar
          </Button>
          <Button type="submit">Salvar Termo</Button>
        </div>
      </form>
    </Form>
  )
}
