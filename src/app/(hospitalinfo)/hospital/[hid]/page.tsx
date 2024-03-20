import Image from 'next/image'
import getHospital from '@/libs/getHospital';

export default async function HospitalDetail( {params} : {params:{hid:string}} ) {

    const hospital = await getHospital(params.hid);
    const hospitalDetail = hospital.data as unknown as HospitalItem;

    //Mock data
    // const mockHospitalInfo = new Map();
    // mockHospitalInfo.set("001", {name:"Chulalongkorn Hospital", imgSrc: "/img/chula.jpg"});
    // mockHospitalInfo.set("002", {name:"Rajavithi Hospital", imgSrc: "/img/rajavithi.jpg"});
    // mockHospitalInfo.set("003", {name:"Thammasat University Hospital", imgSrc: "/img/thammasat.jpg"});

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Hospital Detail</h1>
            <div className="flex flex-row my-5">
                <Image src={hospitalDetail.picture} 
                alt='Hospital Image'
                width={0} height={0} sizes='100vw'
                className='rounded-lg w-[30%]'></Image>
                <div className='text-md mx-5 text-left'>{hospitalDetail.name}
                    <div className='text-md mx-5'>Address: {hospitalDetail.address}, {hospitalDetail.district}, {hospitalDetail.province} {hospitalDetail.postalcode}</div>
                    <div className='text-md mx-5'>Tel: {hospitalDetail.tel}</div>
                </div>
            </div>
        </main>
    )
}

// export async function generateStaticParams() {
//     return [{hid:'001'},{hid:'002'},{hid:'003'}]
// }