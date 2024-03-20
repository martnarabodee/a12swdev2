export default async function getHospital(id:string): Promise<HospitalJson> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch(`https://vaccine-app-backend.vercel.app/api/v1/hospitals/${id}`);
    if (!response.ok) {
        console.log(response.text());
        throw new Error('Failed to fetch hospital');
    }
    return await response.json();
}