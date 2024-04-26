import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {AlignJustify} from 'lucide-react'

const Sidebar = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <AlignJustify className=''/>
        </SheetTrigger>
        <SheetContent>
            Sidebar
        </SheetContent>
    </Sheet>
  )
}

export default Sidebar
