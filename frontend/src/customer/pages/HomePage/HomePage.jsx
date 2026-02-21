import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta';

const HomePage = () => {
  return (
    <div>
      <MainCarousel />

      <div className='flex flex-col space-y-10 py-20 justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName="Mens Kurta" />
        <HomeSectionCarousel data={mens_kurta} sectionName="Mens Kurta" />
        <HomeSectionCarousel data={mens_kurta} sectionName="Mens Kurta" />
        <HomeSectionCarousel data={mens_kurta} sectionName="Mens Kurta" />
        <HomeSectionCarousel data={mens_kurta} sectionName="Mens Kurta" />
      </div>
    </div>
  )
}

export default HomePage