import { URLS } from '@/config/Urlconfig'
import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFound = (): void => {
  const { push }: NextRouter = useRouter()
  useEffect(() => {
    push(URLS.HOME)
  }, [])
}

export default NotFound
