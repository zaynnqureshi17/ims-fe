import LabelValue, { labelValueProps } from "@/components/common/LabelValue";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { memo } from "react";

interface OutletInformationProps {
  title: string;
  overViewData: labelValueProps[];
}

const OutletInformation = ({ title, overViewData }: OutletInformationProps) => {
  return (
    <SectionWrapper title={title}>
      {overViewData.map((item, index) => (
        <LabelValue key={index} label={item.label} value={item.value} />
      ))}
    </SectionWrapper>
  );
};

export default memo(OutletInformation);
