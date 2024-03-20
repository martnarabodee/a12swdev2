export default async function getHospitals(): Promise<HospitalJson>  {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = await fetch('https://vaccine-app-backend.vercel.app/api/v1/hospitals');
    if (!response.ok) {
        console.log(response.text());
        throw new Error('Failed to fetch hospitals');
    }

    return await response.json();
}
