import { FC } from "react"
// import FooterLogo from "@/components/sections/footer/logo"
import { FooterData } from "@/utils/getFooters"
import FooterSection from "./sections/FooterSection"

interface Footer extends  FooterData {
  onClickLogo?: ( ()=> void ) | undefined
}

const Footer: FC<Footer> = ({
  attributes,
  onClickLogo
}: Footer ) => {
  
  return (
    <section className="w-full border-t border-0 border-solid border-surface-800 mt-18 w-t:mt-12 w-p:mt-12">

      <>
        {
          attributes?.footerSection.map((section, i) => {
            return <FooterSection {...section} onClickLogo={onClickLogo} key={i}></FooterSection>
          })
        }
      </>
     
    </section>
  );
}

export default Footer