import React from 'react'
import Section1 from '../Components/Packages/Section1'
import Section2 from '../Components/Packages/Section2'
import Section3 from '../Components/Packages/Section3'
import Section4 from '../Components/Packages/Section4'
import Section5 from '../Components/Packages/Section5'
import Section6 from '../Components/Packages/Section6'
import Footer from '../Components/Footer'
import packagesData from '../Data/packagesData'

const PremiumPackages = () => {
    const data = packagesData.premium;
    return (
        <div>
            <Section1
                packageName={data.packageName}
                price={data.price}
                promoPrice={data.promoPrice}
                description={data.description}
                buttonText={data.buttonText}
                image={data.image}
            />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />
        </div>
    )
}

export default PremiumPackages