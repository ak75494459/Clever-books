import { Slider } from "./ui/slider";
const StickyScrollSection = () => {
  return(
    <div className="bg-black">
        {/* <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d23caea3ebf_gradient-bg.svg" className="float-left" /> */}
        <div>
            <Slider 
                orientation="vertical" 
                defaultValue={[33]} 
                max={100} 
                step={1} 
            />
        </div>
    </div>
  )
}

export default StickyScrollSection;
