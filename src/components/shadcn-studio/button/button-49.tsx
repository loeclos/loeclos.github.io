import { ArrowUpRightIcon } from 'lucide-react'

import { CraftButton, CraftButtonLabel, CraftButtonIcon } from '@/components/ui/craft-button'

const CraftButtonDemo = () => {
  return (
    <CraftButton>
      <CraftButtonLabel>Click me</CraftButtonLabel>
      <CraftButtonIcon>
        <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
      </CraftButtonIcon>
    </CraftButton>
  )
}

export default CraftButtonDemo
