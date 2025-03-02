"use client"

import { ChevronDown } from "lucide-react"
import * as Accordion from "@radix-ui/react-accordion"
import Link from "next/link"

const faqs = [
  {
    question: "How is my data stored?",
    answer: (
      <>
        camelAI's infrastructure is hosted on AWS. Data from applications is pulled only when necessary and limited to
        what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then deleted. For more
        information, please see our{" "}
        <Link href="#" className="text-blue-400 hover:underline">
          Security Policy
        </Link>{" "}
        and our{" "}
        <Link href="#" className="text-blue-400 hover:underline">
          security blog post
        </Link>
        .
      </>
    ),
  },
  {
    question: "Do you train on my data?",
    answer: (
      <>
        No, we do not train on your data. CamelAI is powered by OpenAI's API. We have opted out of data sharing for
        training. You can read more about{" "}
        <Link href="#" className="text-blue-400 hover:underline">
          OpenAI's API policies here
        </Link>
        .
      </>
    ),
  },
  {
    question: "Are my app connections secure?",
    answer:
      "Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate and authorize access to your applications. Your data is encrypted in transit and at rest. If you revoke access to an app, the connection is immediately destroyed and we will no longer have access to that application.",
  },
  {
    question: "How do you pull my data?",
    answer:
      "camelAI only communicates with your connected apps when you request data in the chat. We do not train on your data, nor do we access or store any data without your request and supervision.",
  },
]

export default function FAQSection() {
  return (
    <div className="w-full bg-black text-white py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-medium text-center mb-12">FAQs</h2>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <Accordion.Item key={i} value={`item-${i}`} className="border-b border-white/10">
              <Accordion.Trigger className="w-full flex items-center justify-between py-6 text-left text-lg hover:text-white/80">
                {faq.question}
                <ChevronDown className="w-5 h-5 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
              <Accordion.Content className="pb-6">
                <div className="font-mono text-sm bg-[#1a1f2d] rounded-lg p-6">{faq.answer}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  )
}

