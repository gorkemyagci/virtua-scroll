"use client";
import { VList } from "virtua"
import * as React from "react"

export default function Home() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    ref.current?.scrollToIndex(100000);
  },[ref])
  return (
    <div>
      <VList ref={ref} mode="reverse" style={{ height: 800 }}>
        {Array.from({ length: 100000 }).map((_, i) => {
          return (
            <div
              style={{
                height: 100,
                background: 'gray',
                margin: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 30,
              }}
            >{i}</div>
          )
        })}
      </VList>
    </div>
  )
}
