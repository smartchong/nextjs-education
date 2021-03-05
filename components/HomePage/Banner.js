import Link from 'next/link'
import ReactSlick from 'react-slick'
import styles from './Banner.module.css'

export default function Banner({ data = [] }) {
  const isSwiperable = !!(data && data.length)
  const settings = {
    arrows: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: isSwiperable,
    infinite: isSwiperable,
    swipe: isSwiperable,
    dots: isSwiperable,
    dotsClass: 'banner-dots',
    className: 'home-banners',
  }

  return (
    <div className={styles.wrapper}>
      {/* 轮播 */}
      <ReactSlick {...settings}>
        {data.map((item, index) => (
          <div key={`${index}-${item.courseId}`}>
            {/* 跳转链接 */}
            <Link href="/course/detail/[id]" as={`course/detail/${item.courseId}`}>
              {/* banner图片 */}
              <img className={styles.slide} src={item.img} key={index} alt={item.title} />
            </Link>
          </div>
        ))}
      </ReactSlick>
      {/* 半透明渐变蒙层 */}
      <div className={styles.mask}></div>
    </div>
  )
}
