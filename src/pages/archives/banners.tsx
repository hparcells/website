import Image, { ImageLoader, ImageLoaderProps } from 'next/image';
import Link from 'next/link';

import Layout from '../../components/Layout';

import classes from '../../styles/archives.module.scss';

const banners = [
  'dt',
  'geoguessr',
  'integration',
  'interest',
  'midwest',
  'cooking',
  'red-rising-shelf'
];

const bannerLoader: ImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://cdn.hunterparcells.com/banner/${src}.png`;
};

function Banners() {
  return (
    <Layout title='Banners'>
      <div className={classes.root}>
        <Link href='/archives'>Back to Archives Home</Link>

        <h1>Banners</h1>
        <p>A small collection of some banner's I've made.</p>
        <ul>
          <li>Discord's profile banner size is 1360x480, or a 17:6 aspect ratio.</li>
          <li>Twitter's banner is 1500x500 or a 3:1 aspect ratio.</li>
          <li>Ko-fi's banner is 1200x400 or a 3:1 aspect ratio.</li>
        </ul>

        {banners.map((banner, i) => {
          return (
            <div style={{ marginBottom: '42px' }} key={banner}>
              <p style={{ margin: 0 }}>
                <a href={`https://cdn.hunterparcells.com/banner/${banner}.png`} target='_blank'>
                  {banner}.png
                </a>
              </p>
              <div style={{ position: 'relative', width: '100%' }}>
                <Image
                  loader={bannerLoader}
                  src={banner}
                  alt={banner}
                  layout='responsive'
                  width={1360}
                  height={480}
                  objectFit='contain'
                />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Banners;
