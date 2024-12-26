import React from "react";
import Masonry from "react-masonry-css";

type Props = {};
const DETAILSPROD = [
 {
    title: "INFORMATION ABOUT THE SOMMIER AND HEADBOARD UPHOLSTERY",
    description: `A) all-leather or all-fabric upholstery;\nB) sommier upholstered in leather (cat. Nature Leather), headboard in fabric;\nC) MIX sommier upholstery (upper part upholstered in fabric and lower part in leather cat. Nature Leather), headboard in fabric. On the MIX sommier, the fabric upholstery for the upper part must be the same as that chosen for the headboard.`,
  },
  {
    title: "NIGHTSTANDS",
    description: `Structure: boxed MDF with 45° assembly, 20 mm thick, veneered in:\n- ash with open-pore Licorice colour lacquer finish;\n- ash open-pore Tobacco colour stain;\n- oak with open-pore Honey colour stain;\n- palisander Santos* , stained Dark Brown, matt polyester lacquer finish. Base in MDF, 20 mm thick, matt black lacquer finish. Drawer interior finish matches exterior finish; metal handle, varnished polished brandy colour finish. Top contains a cable slot in MDF, veneered in the same finish as the structure. Drawer glides on full-extension guides with Blumotion closure.`,
  },
  {
    title: "FIT CONFIGURATION",
    description: `Composed of a single panel attached to the back and fit with the upholstered headboard. One-piece panel in metal-reinforced plywood covered with quilted heat-bonded polyester fibre. All of the materials employed in manufacturing the quilting are hypoallergenic and made with recycled materials. The panel and the headboard are attached to each other and to the bed frame. 2 optional nightstands are available, left and right (SX and DX) attached to the sommier. The special upholstery for the base and the rear headboard panels in the OFFSET/FIT versions can be made entirely in fabric, featuring a central piping between the two sections. Entirely in leather which are joined with a strip of double-stitched leather; or, with one side in leather and one in fabric, joined by a hidden zipper that allows the upholstery to be removed (MIX version).`,
  },
  {
    title: "INFORMATION ABOUT THE SOMMIER AND HEADBOARD UPHOLSTERY",
    description: ` A) all-leather or all-fabric upholstery;\n
B) sommier upholstered in leather (cat. Nature Leather), headboard in fabric;\n
C) MIX sommier upholstery (upper part upholstered in fabric and lower part in leather cat. Nature Leather), headboard in fabric. On the MIX sommier, the fabric upholstery for the upper part must be the same as that chosen for the headboard.`,
  },
  {
    title: "NIGHTSTANDS",
    description: ` Structure: boxed MDF with 45° assembly, 20 mm thick, veneered in:\n
- ash with open-pore Licorice colour lacquer finish;\n
- ash open-pore Tobacco colour stain;\n
- oak with open-pore Honey colour stain;\n
- palisander Santos* , stained Dark Brown, matt polyester lacquer finish. Base in MDF, 20 mm thick, matt black lacquer finish. Drawer interior finish matches exterior finish; metal handle, varnished polished brandy colour finish. Top contains a cable slot in MDF, veneered in the same finish as the structure. Drawer glides on full-extension guides with Blumotion closure.
Covers: upholstery in fabric or leather is completely removable. Removal of the headboard upholstery is possible by lifting the headboard out of the bed frame by means of levers located underneath the bed.
Feet: made of 25 mm Ø satin-finish solid metal rods, varnished polished Brandy colour, with varnished polished brandy colour metal tip. Where included, the nightstand bases are made of processed sheet metal, also varnished polished Brandy colour. Adjustable black polyethylene glides.\n
N.B.: given the structure of the bed, it is not possible to insert a slatted base or adjust mattress height. The bed headboard and accessories do not require attachment to a wall.`,
  },
  {
    title: "INFORMATION REGARDING UPHOLSTERY OF THE PANEL(S) OFFSET/FIT",
    description: `A) all-leather or all-fabric upholstery;\n
B) MIX upholstery (upholstery of the front part in fabric and the posterior part in leather cat. Nature Leather). Should the upholstery choice for the sommier/headboard be in MIX version\n (C), the upholstery of the panel(s) OFFSET/FIT in the MIX version must be the same as the fabric choice.\n
* palisander Santos comes from properly managed forests. `,
  },
  {
    title: "BENCHES",
    description: `Structure: in plywood of various thicknesses. The structure is coated in high-resilience, variable-density polyurethane foam. The special upholstery on the base can be crafted in entirely in fabric, featuring an all-leather central trim element that marks the seam between the two sections, which are joined with a strip of double-stitched leather (tailoring technique used in fine luggage); or, with a lower section in leather and upper section in fabric, joined by a hidden zipper that allows the upholstery to be removed.
Cushions: made of many layers of variable-density, high resilience polyurethane foam. Encased in breathable heat-bonded polyester quilted fibre laminated to white cotton fabric. Inside the quilt is a bag padded with siliconised microfibre - with a low coefficient of friction - which completely conforms to the structure; this very soft, fluffy padding is obtained from certified 100% recycled PET. All of the materials employed in manufacturing the quilt are hypoallergenic.
Covers: completely removable in all versions (fabric or leather).
Feet: made of 25 mm Ø satin-finish solid metal rods, varnished polished Brandy colour, with varnished polished Brandy colour metal tip. Adjustable black polyethylene glides. `,
  },
  {
    title: "INFORMATION REGARDING UPHOLSTERY OF THE PANEL(S) OFFSET/FIT",
    description: `A) all-leather or all-fabric upholstery;
B) MIX upholstery (upholstery of the front part in fabric and the posterior part in leather cat. Nature Leather). Should the upholstery choice for the sommier/headboard be in MIX version (C), the upholstery of the panel(s) OFFSET/FIT in the MIX version must be the same as the fabric choice.
* palisander Santos comes from properly managed forests. `,
  },
  
];
const DetailsProd = (props: Props) => {  
   const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="w-screen max-lg:px-16 max-md:px-12 max-sm:px-3 text-black pb-10 bg-white px-24">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {DETAILSPROD.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between h-max bg-white p-4"
          >
            <h2 className="font-bold text-xl">{item.title}</h2>
            <p className="whitespace-pre-line">{item.description}</p>
            <hr className="w-full h-[1px] border-0 bg-black mt-8" />
          </div>
        ))}
      </Masonry>
    </div>
  );

};

export default DetailsProd;
