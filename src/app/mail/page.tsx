import { cookies } from "next/headers"
import Image from "next/image"

import { Mail } from "@/app/mail/components/mail"
import { accounts, mails } from "@/app/mail/data"

export default function MailPage() {
  // 布局
  const layout = cookies().get("react-resizable-panels:layout")
  // 折叠
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  // 布局
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  // 折叠
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      <div className="flex-col flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
