// import { Metadata } from "next";
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout";
import getLayout from "@/utils/getLayout";

// export const metadata: Metadata = {
//   title: "meta?.metaTitle",
//   description: "meta?.metaDescription",
//   openGraph: {
//     title: "meta?.metaTitle",
//     description: "meta?.metaDescription",
//     images: ["meta?.metaImage?.data?.attributes?.url"],
//     url: "meta?.canonicalURL",
//   },
//   twitter: {
//     title: "meta?.metaTitle",
//     description: "meta?.metaDescription",
//     images: ["meta?.metaImage?.data?.attributes?.url"],
//   },
//   keywords: ["meta?.keywords"],
//   robots: "meta?.metaRobots",
//   viewport: "width=device-width, initial-scale=1.0",
//   alternates: {
//     canonical: "meta?.canonicalURL",
//   },
// };

export default async function Home() {

    const layoutData = await getLayout();

    return (
      <HeaderFooterLayout breadcrumbs={false} layoutData={layoutData}>
        <div className="flex flex-col w-p:space-y-12 w-t:space-y-12 w-d:space-y-18 w-d:mt-18"></div>
      </HeaderFooterLayout>
    );
}