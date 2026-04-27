export interface Product {
  id: string;
  itemCode?: string;
  name: {
    en: string;
    zh: string;
  };
  category: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  image: string;
  images?: string[];
  status: 'ready' | 'preorder';
  specs: {
    width: string;
    gsm: string;
    composition: string;
    specification?: string;
    weftDensity?: string;
    pattern?: {
      en: string;
      zh: string;
    };
    application: {
      en: string;
      zh: string;
    };
    customization?: {
      en: string;
      zh: string;
    };
  };
}

export const products: Product[] = [
  {
    id: 'cotton-twill',
    itemCode: '2502',
    name: {
      en: 'Cool Silk Cotton T400 Cavalry Twill',
      zh: '酷丝棉T400骑兵斜'
    },
    category: {
      en: 'Cotton Fabrics',
      zh: '全棉面料'
    },
    description: {
      en: 'High-quality cotton twill fabric with a dense texture, durable and comfortable, suitable for various casual wear.',
      zh: '高品质全棉斜纹面料，质地紧密，耐穿舒适，适用于各类休闲服装。'
    },
    image: '/productimages/product-coolsilkcotton-1.jpg',
    images: [
      '/productimages/product-coolsilkcotton-1.jpg',
      '/productimages/product-coolsilkcotton-2.jpg',
      '/productimages/product-coolsilkcotton-3.jpg',
      '/productimages/product-coolsilkcotton-4.jpg',
      '/productimages/product-coolsilkcotton-5.jpg'
    ],
    status: 'ready',
    specs: {
      width: '150 cm',
      gsm: '160 g/m²',
      composition: '100% Polyester',
      application: { en: 'trousers, jackets, fashion wear', zh: '裤子、夹克、时装' }
    }
  },
  {
    id: 'silver-stripe',
    itemCode: '6688',
    name: {
      en: 'Double-Sided Silver Stripe Fabric',
      zh: '双面银丝条'
    },
    category: {
      en: 'Functional Fabrics',
      zh: '功能性面料'
    },
    description: {
      en: 'Premium double-sided fabric featuring elegant silver stripes, offering a sophisticated look and comfortable feel for high-end fashion.',
      zh: '优质双面面料，带有优雅的银丝条纹，为高端时尚提供精致的外观和舒适的手感。'
    },
    image: '/productimages/product-silverwirestrip-1.jpg',
    images: [
      '/productimages/product-silverwirestrip-1.jpg',
      '/productimages/product-silverwirestrip-2.jpg',
      '/productimages/product-silverwirestrip-3.jpg',
      '/productimages/product-silverwirestrip-4.jpg'
    ],
    status: 'ready',
    specs: {
      width: '150 cm',
      gsm: '160–170 g/m²',
      composition: '100% Polyester',
      application: { en: 'trousers, jackets, fashion wear', zh: '裤子、夹克、时装' }
    }
  },
  {
    id: 'cotton-bamboo',
    itemCode: '2601',
    name: {
      en: 'Monofilament Cotton Bamboo Texture',
      zh: '单丝全棉竹节'
    },
    category: {
      en: 'Cotton Fabrics',
      zh: '全棉面料'
    },
    description: {
      en: 'Lightweight cotton bamboo texture fabric with a unique monofilament weave, perfect for breathable summer apparel.',
      zh: '轻盈的全棉竹节纹理面料，采用独特的单丝织法，非常适合透气的夏季服装。'
    },
    image: '/productimages/product-cottonbamboo-1.jpg',
    images: [
      '/productimages/product-cottonbamboo-1.jpg',
      '/productimages/product-cottonbamboo-2.jpg',
      '/productimages/product-cottonbamboo-3.jpg',
      '/productimages/product-cottonbamboo-4.jpg',
      '/productimages/product-cottonbamboo-5.jpg',
      '/productimages/product-cottonbamboo-6.jpg'
    ],
    status: 'preorder',
    specs: {
      width: '150 cm',
      gsm: '80–85 g/m²',
      composition: '84% Cotton, 16% Nylon',
      application: { en: 'shirts, lightweight tops, summer wear', zh: '衬衫、轻便上衣、夏季服装' }
    }
  },
  {
    id: 'sticky-hemp',
    itemCode: '2602',
    name: {
      en: 'Sticky Hemp Cavalry Twill',
      zh: '粘麻骑兵斜'
    },
    category: {
      en: 'Blended Fabrics',
      zh: '混纺面料'
    },
    description: {
      en: 'A unique blend of rayon, nylon, and linen, this cavalry twill offers a distinctive texture and excellent breathability for lightweight summer garments.',
      zh: '粘胶、尼龙和亚麻的独特混纺，这款骑兵斜纹面料为轻便的夏季服装提供了独特的纹理和出色的透气性。'
    },
    image: '/productimages/product-stickyhemp-1.jpg',
    images: [
      "/productimages/product-stickyhemp-1.jpg",
      "/productimages/product-stickyhemp-2.jpg",
      "/productimages/product-stickyhemp-3.jpg",
      "/productimages/product-stickyhemp-4.jpg"
    ],
    status: 'ready',
    specs: {
      width: '150 cm',
      gsm: '80 g/m²',
      composition: '65% Rayon, 31% Nylon, 4% Linen',
      application: { en: 'shirts, lightweight tops, summer wear', zh: '衬衫、轻便上衣、夏季服装' }
    }
  },
  {
    id: 'dubai-crepe',
    itemCode: '8085',
    name: {
      en: 'Imitation Acetic Acid Dubai Crepe',
      zh: '仿醋酸迪拜绉'
    },
    category: {
      en: 'Functional Fabrics',
      zh: '功能性面料'
    },
    description: {
      en: 'Elegant imitation acetic acid crepe fabric with a sophisticated Dubai-style texture, offering a luxurious drape and soft feel for high-end fashion.',
      zh: '优雅的仿醋酸绉布面料，具有精致的迪拜风格纹理，为高端时尚提供奢华的垂坠感和柔软的手感。'
    },
    image: '/productimages/product-dubaicrepe-1.jpg',
    images: [
      '/productimages/product-dubaicrepe-1.jpg',
      '/productimages/product-dubaicrepe-2.jpg',
      '/productimages/product-dubaicrepe-3.jpg',
      '/productimages/product-dubaicrepe-4.jpg',
      '/productimages/product-dubaicrepe-5.jpg'
    ],
    status: 'ready',
    specs: {
      width: '150 cm',
      gsm: '105 g/m²',
      composition: '100% Polyester',
      application: { en: 'dresses, blouses, fashion wear', zh: '连衣裙、衬衫、时装' }
    }
  },
  {
    id: 'pearl-yarn',
    itemCode: '2503',
    name: {
      en: 'Colorful Pearl Yarn',
      zh: '彩珠纱'
    },
    category: {
      en: 'Functional Fabrics',
      zh: '功能性面料'
    },
    description: {
      en: 'Vibrant and lightweight pearl yarn fabric with a subtle shimmer, offering a delicate touch and elegant appearance for modern fashion.',
      zh: '鲜艳轻盈的彩珠纱面料，带有微妙的光泽，为现代时尚提供细腻的手感和优雅的外观。'
    },
    image: '/productimages/product-pearlyarn-1.jpg',
    images: [
      '/productimages/product-pearlyarn-1.jpg',
      '/productimages/product-pearlyarn-2.jpg',
      '/productimages/product-pearlyarn-3.jpg',
      '/productimages/product-pearlyarn-4.jpg',
      '/productimages/product-pearlyarn-5.jpg'
    ],
    status: 'preorder',
    specs: {
      width: '150 cm',
      gsm: '65 g/m²',
      composition: '30% nylon, 70% rayon',
      application: { en: 'blouses, dresses, lightweight fashion wear', zh: '衬衫、连衣裙、轻便时装' }
    }
  },
  {
    id: 'hollow-out-flower',
    itemCode: '6677',
    name: {
      en: 'Hollow Out Strip Hand-held Flower',
      zh: '镂空条手抓花'
    },
    category: {
      en: 'Functional Fabrics',
      zh: '功能性面料'
    },
    description: {
      en: 'Intricate hollow-out strip fabric with a unique hand-held flower texture, perfect for sophisticated fashion garments and decorative applications.',
      zh: '精致的镂空条面料，具有独特的手抓花纹理，非常适合精致的时装和装饰用途。'
    },
    image: '/productimages/product-hollowstrip-1.jpg',
    images: [
      '/productimages/product-hollowstrip-1.jpg',
      '/productimages/product-hollowstrip-2.jpg',
      '/productimages/product-hollowstrip-3.jpg',
      '/productimages/product-hollowstrip-4.jpg',
      '/productimages/product-hollowstrip-5.jpg'
    ],
    status: 'ready',
    specs: {
      width: '150 cm',
      gsm: '135 g/m²',
      composition: '100% Polyester',
      application: { en: 'fashion garments, dresses, decorative fabrics', zh: '时装、连衣裙、装饰面料' }
    }
  },
  {
    id: 'small-bubbles',
    itemCode: '8086',
    name: {
      en: 'Double-sided Small Bubbles',
      zh: '双面小泡泡'
    },
    category: {
      en: 'Functional Fabrics',
      zh: '功能性面料'
    },
    description: {
      en: 'Unique double-sided fabric with a playful small bubble texture, offering a distinctive look and tactile feel for modern fashion garments.',
      zh: '独特的双面面料，具有俏皮的小泡泡纹理，为现代时尚服装提供独特的外观和触感。'
    },
    image: '/productimages/product-smallbubbles-1.jpg',
    images: [
      '/productimages/product-smallbubbles-1.jpg',
      '/productimages/product-smallbubbles-2.jpg',
      '/productimages/product-smallbubbles-3.jpg',
      '/productimages/product-smallbubbles-4.jpg',
      '/productimages/product-smallbubbles-5.jpg'
    ],
    status: 'preorder',
    specs: {
      width: '150 cm',
      gsm: '138 g/m²',
      composition: '100% Polyester',
      application: { en: 'fashion garments, dresses, textured apparel', zh: '时装、连衣裙、纹理服装' }
    }
  },
  {
    id: 'satin-straight-strip',
    itemCode: '6021',
    name: {
      en: 'Satin Straight Strip',
      zh: '缎面直条'
    },
    category: {
      en: 'Functional Fabrics',
      zh: '功能性面料'
    },
    description: {
      en: 'Smooth satin fabric with elegant straight strips, providing a luxurious sheen and sophisticated texture for high-end fashion.',
      zh: '光滑的缎面面料，带有优雅的直条纹，为高端时尚提供奢华的光泽和精致的纹理。'
    },
    image: '/productimages/product-satinstraightstrip-1.jpg',
    images: [
      '/productimages/product-satinstraightstrip-1.jpg',
      '/productimages/product-satinstraightstrip-2.jpg',
      '/productimages/product-satinstraightstrip-3.jpg',
      '/productimages/product-satinstraightstrip-4.jpg',
      '/productimages/product-satinstraightstrip-5.jpg'
    ],
    status: 'ready',
    specs: {
      width: '150 cm',
      gsm: '145–150 g/m²',
      composition: '100% Polyester',
      application: { en: 'shirts, dresses, fashion wear', zh: '衬衫、连衣裙、时装' }
    }
  },
  {
    id: 'pearl-chiffon',
    itemCode: '8029',
    name: {
      en: 'Pearl Chiffon',
      zh: '珍珠雪纺'
    },
    category: {
      en: 'Functional Fabrics',
      zh: '功能性面料'
    },
    description: {
      en: 'Elegant pearl chiffon fabric with a delicate pearlescent sheen and a soft, flowing drape, perfect for modern fashion and evening wear.',
      zh: '优雅的珍珠雪纺面料，具有细腻的珍珠光泽和柔软飘逸的垂坠感，非常适合现代时尚和晚装。'
    },
    image: '/productimages/product-pearlchiffon-1.jpg',
    images: [
      '/productimages/product-pearlchiffon-1.jpg',
      '/productimages/product-pearlchiffon-2.jpg',
      '/productimages/product-pearlchiffon-3.jpg',
      '/productimages/product-pearlchiffon-4.jpg',
      '/productimages/product-pearlchiffon-5.jpg',
      '/productimages/product-pearlchiffon-6.jpg',
      '/productimages/product-pearlchiffon-7.jpg',
      '/productimages/product-pearlchiffon-8.jpg',
      '/productimages/product-pearlchiffon-9.jpg',
      '/productimages/product-pearlchiffon-10.jpg'
    ],
    status: 'ready',
    specs: {
      width: '150 cm',
      gsm: '100 g/m²',
      composition: '100% Polyester',
      application: { en: 'dresses, blouses, lightweight fashion wear', zh: '连衣裙、衬衫、轻便时装' }
    }
  },
  {
    id: 'imitate-acetate-satin',
    itemCode: '8070',
    name: {
      en: 'Imitate Acetate Satin',
      zh: '仿醋酸缎'
    },
    category: {
      en: 'Functional Fabrics',
      zh: '功能性面料'
    },
    description: {
      en: 'Exquisite imitate acetate satin fabric with a luxurious silk-like texture and a soft, smooth hand feel, perfect for high-end fashion and elegant apparel.',
      zh: '精致的仿醋酸缎面料，具有奢华的丝绸质感和柔软光滑的手感，非常适合高端时尚和优雅服装。'
    },
    image: '/productimages/product-acetatesatin-1.jpg',
    images: [
      '/productimages/product-acetatesatin-1.jpg',
      '/productimages/product-acetatesatin-2.jpg',
      '/productimages/product-acetatesatin-3.jpg',
      '/productimages/product-acetatesatin-4.jpg',
      '/productimages/product-acetatesatin-5.jpg',
    ],
    status: 'ready',
    specs: {
      width: '150 cm',
      gsm: '137 g/m²',
      composition: '100% Polyester',
      application: { en: 'dresses, blouses, fashion wear', zh: '连衣裙、衬衫、时装' }
    }
  },
  {
    id: 'sunshine-satin-stretch',
    itemCode: '8074',
    name: {
      en: 'Sunshine Satin',
      zh: '阳光缎'
    },
    category: {
      en: 'Functional Fabrics',
      zh: '功能性面料'
    },
    description: {
      en: 'Premium sunshine satin fabric with a high-shine finish and subtle stretch, perfectly designed for modern fashion and flexible apparel.',
      zh: '优质阳光缎面料，具有高光泽度和细腻的弹力，专为现代时尚和灵活服饰而设计。'
    },
    image: '/productimages/product-sunshinesatin-1.jpg',
    images: [
      '/productimages/product-sunshinesatin-1.jpg',
      '/productimages/product-sunshinesatin-2.jpg',
      '/productimages/product-sunshinesatin-3.jpg',
      '/productimages/product-sunshinesatin-4.jpg',
      '/productimages/product-sunshinesatin-5.jpg',
      '/productimages/product-sunshinesatin-6.jpg'
    ],
    status: 'ready',
    specs: {
      width: '150 cm',
      gsm: '153 g/m²',
      composition: '96% Polyester, 4% Spandex',
      application: { en: 'dresses, blouses, stretch fashion wear', zh: '连衣裙、衬衫、弹力时装' }
    }
  },
  {
    id: 'korea-crepe',
    itemCode: '8071',
    name: {
      en: 'Korea Crepe',
      zh: '韩版乱麻'
    },
    category: {
      en: 'Functional Fabrics',
      zh: '功能性面料'
    },
    description: {
      en: 'Classic Korea crepe fabric with a unique pebbled texture and a heavy, graceful drape, providing a sophisticated look for high-end fashion.',
      zh: '经典的韩版乱麻面料，具有独特的颗粒感纹理和厚重优雅的垂坠感，为高端时尚提供精致外观。'
    },
    image: '/productimages/product-koreacrepe-1.jpg',
    images: [
      '/productimages/product-koreacrepe-1.jpg',
      '/productimages/product-koreacrepe-2.jpg',
      '/productimages/product-koreacrepe-3.jpg',
      '/productimages/product-koreacrepe-4.jpg'
    ],
    status: 'ready',
    specs: {
      width: '150 cm',
      gsm: '183 g/m²',
      composition: '100% Polyester',
      weftDensity: '38',
      application: { en: 'dresses, blouses, fashion wear', zh: '连衣裙、衬衫、时装' }
    }
  },
  {
    id: 'double-fdy-fabric',
    itemCode: '8053',
    name: {
      en: 'Double FDY Fabric',
      zh: '双层四面弹'
    },
    category: {
      en: 'Functional Fabrics',
      zh: '功能性面料'
    },
    description: {
      en: 'Double-sided FDY four-way stretch fabric with excellent recovery and a smooth texture, perfect for activewear and comfortable fashion garments.',
      zh: '双面 FDY 四面弹面料，具有出色的回复率和光滑的纹理，非常适合运动装和舒适的时尚服装。'
    },
    image: '/productimages/product-doublefdy-1.jpg',
    images: [
      '/productimages/product-doublefdy-1.jpg',
      '/productimages/product-doublefdy-2.jpg',
      '/productimages/product-doublefdy-3.jpg',
      '/productimages/product-doublefdy-4.jpg',
      '/productimages/product-doublefdy-5.jpg'
    ],
    status: 'ready',
    specs: {
      width: '150 cm',
      gsm: '215 g/m²',
      composition: '94% Polyester, 6% Spandex',
      specification: '75D * 75D',
      application: { en: 'stretch garments, dresses, activewear, fashion wear', zh: '弹力服装、连衣裙、运动装、时装' }
    }
  }
];
