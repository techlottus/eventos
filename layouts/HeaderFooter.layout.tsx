"use client";
import { useRouter } from "next/navigation"
// import Header from "@/old-components/HeaderPortalverse/HeaderPortalverse"
import HeaderFooterLayoutProps from "@/types/HeaderFooterLayout.types"
// import Breadcrumbs from "@/old-components/Breadcrumbs/BreadcrumbPortalverse"
// import ContentLayout from "@/layouts/Content.layout"
// import HeaderConf from "@/config/header.json"
// import FooterConf from "@/config/footer.json"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"

export default function HeaderFooterLayout({ children, breadcrumbs = true , layoutData}: any) {

  // const { menus, logotype, menuMobile } = HeaderConf;
  // const { privacyLink, certifications, logotype: logotipo, social, phone, directorio, sections } = FooterConf;

  const router = useRouter();

  const logotypeClick = () => router.push('/');

  return <>
    <Header {...layoutData?.attributes?.header?.data?.attributes} />
    <div className="">
      {/* <ContentLayout>
        {/* <Breadcrumbs classNames="col-span-12 w-t:col-span-8 w-p:col-span-4" visible={breadcrumbs} /> 
      </ContentLayout> */}
      { children }

     </div>
    <Footer onClickLogo={logotypeClick} {...layoutData?.attributes?.footer?.data}/>
  </>
}