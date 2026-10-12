import images from '../image-sizes.json';
// Przeglądarka wybiera plik do szerokości ekranu i gęstości pikseli.
export default function ResponsiveImage({src,mobileSrc,alt,sizes='100vw',loading='lazy',...props}) {
 const image=images[src]; const mobile=images[mobileSrc];
 const content=<img {...props} src={src} srcSet={image?.srcSet} sizes={sizes} width={image?.width} height={image?.height} alt={alt} loading={loading} decoding="async" />;
 return mobileSrc ? <picture><source media="(max-width: 800px)" srcSet={mobile?.srcSet || mobileSrc} sizes={sizes} width={mobile?.width} height={mobile?.height} />{content}</picture> : content;
}
