import { CATEGORIES_ITEMS } from "@/app/Components/Nav/Constant"
import Image from "next/image"

export default async function CategoryDetailsPage(p : {params: {category: keyof typeof CATEGORIES_ITEMS}}){
    // Await the params
    const category = await p.params.category
    const categoryItem = CATEGORIES_ITEMS[category]
    
    return <div className="flex items-center space-x-4">
        <Image src={categoryItem.src} alt={categoryItem.alt}  className="w-10 h-10"/>
        <h1 className="font-bold capitalize text-3xl">{category} News</h1>
    </div>
}