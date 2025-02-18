import HeaderFooterLayout from "@/layouts/HeaderFooter.layout";
import getEventHome from "@/utils/getEventsHome";
import getLayout from "@/utils/getLayout";
import { Banner } from "@/components/sections/Banner";
import { Card, CardType } from "@/components/Card";


export default async function Home() {

  const layoutData = await getLayout();
  const eventHomeData = await getEventHome();
  const bannerData = eventHomeData?.eventList?.data?.attributes?.banner;
  const cardListData = eventHomeData?.events?.data;

  return (
    <HeaderFooterLayout breadcrumbs={false} layoutData={layoutData}>
      <div className="flex justify-center w-full">      
      <section className="desktop:mx-21 tablet:mx-10 mobile:mx-6 mx-auto max-w-[1200px]">
        <div id="breadcrumb"></div>
        <div className="flex flex-col mobile:space-y-12 tablet:space-y-12 desktop:space-y-18 my-6">
          <Banner {...bannerData} />
        </div>
        <div id="description" className="flex flex-col w-3/4 gap-3 mobile:hidden">
          <h1 className="font-headings text-6xl font-bold text-surface-900">{eventHomeData?.eventList?.data?.attributes?.title}</h1>
          <p className="font-texts font-normal text-surface-950 text-base">{eventHomeData?.eventList?.data?.attributes?.description}</p>
        </div>
        <div id="card-list" className="grid grid-cols-4 gap-6 mt-6 h-fit">
          {cardListData?.map((cardData:CardType,i:number) => (
              <Card key={i} {...cardData} />
          ))}
        </div>
      </section></div>
    </HeaderFooterLayout>
  );
} 