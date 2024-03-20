import Link from "next/link"
import Card from "@/components/Card"

export default async function HospitalCatalog({hospitalsJson}:{hospitalsJson: Promise<HospitalJson>}) {
    const hospitalsJsonResult = await hospitalsJson;
    const HospitalJsonReady = hospitalsJsonResult.data;
    return (
        <>
        {/* Explore {HospitalJsonReady.count} hospitals in our catalog */}
        <div style={{margin:"20px", display:"flex", flexDirection:"row", 
            alignContent:"space-around", justifyContent:"space-around", flexWrap:"wrap"}}>
            {HospitalJsonReady.map( (hospital:HospitalItem) => 
                <Link href={`/hospital/${hospital.id}`} className="w-1/5">
                <Card key={hospital.id} hospitalName={hospital.name} imgSrc={hospital.picture}
                />
                </Link>
            )}
        </div>
        </>
    )
}