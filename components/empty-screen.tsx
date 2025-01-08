import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'gemini is a large language model created by google',
    message: 'gemini is a large language model created by google'
  },
  {
    heading: 'Latest Technology Trends',
    message: 'Latest Technology Trends'
  },
  {
    heading: 'Latest Technology Trends',
    message: 'Latest Technology Trends'
  },
  {
    heading: 'Summary: https://arxiv.org/pdf/2407.16833',
    message: 'Summary: https://arxiv.org/pdf/2407.16833'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
