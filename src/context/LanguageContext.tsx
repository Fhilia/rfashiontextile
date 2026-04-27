import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface Translations {
  nav: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    quality: { title: string; desc: string };
    production: { title: string; desc: string };
    custom: { title: string; desc: string };
  };
  products: {
    title: string;
    viewAll: string;
  };
  about: {
    title: string;
    desc1: string;
    desc2: string;
    cta: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    desc: string;
    navTitle: string;
    contactTitle: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  productsPage: {
    hero: { title: string; subtitle: string };
    labels: {
      searchPlaceholder: string;
      noResults: string;
      back: string;
      width: string;
      gsm: string;
      composition: string;
      pattern: string;
      application: string;
      customization: string;
      technicalSpecs: string;
      inquireNow: string;
      status: string;
      ready: string;
      preorder: string;
      weftDensity: string;
      specification: string;
    };
  };
  aboutPage: {
    hero: { label: string; title: string };
    intro: { title: string; content1: string; content2: string };
    strengths: { title: string; items: { title: string; desc: string }[] };
    warehouse: {
      title: string;
      subtitle: string;
    };
    factory: {
      title: string;
      subtitle: string;
    };
    globalReach: {
      title: string;
      mainTitle: string;
      subtitle: string;
      hqLabel: string;
      countries: string[];
    };
  };
  contactPage: {
    hero: { title: string; subtitle: string };
    wechat: { prompt: string };
    phone: { title: string; number: string; contactPerson: string };
    address: { title: string; content: string[] };
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: { home: 'Home', products: 'Products', about: 'About Us', contact: 'Contact' },
    hero: {
      title: 'Redefining Textile Excellence',
      subtitle: 'Premium fabric solutions for global fashion and industry.',
      cta: 'Explore Collection'
    },
    features: {
      quality: { title: 'Premium Quality', desc: 'Sourced from the finest materials with rigorous quality control.' },
      production: { title: 'Advanced Production', desc: 'State-of-the-art manufacturing facilities ensuring precision.' },
      custom: { title: 'Custom Solutions', desc: 'Tailored fabric development to meet your specific requirements.' }
    },
    products: { title: 'Featured Fabrics', viewAll: 'View All Products' },
    about: {
      title: 'Crafting the Future of Textiles',
      desc1: 'R-FASHION is based in Shaoxing, China — one of the world’s largest textile hubs. With direct access to a strong supply chain, we specialize in sourcing and delivering high-quality fabrics for global markets.',
      desc2: 'We focus on reliability, consistent quality, and efficient production, supporting clients from material selection to final delivery.',
      cta: 'Our Story'
    },
    cta: {
      title: 'Let’s Work Together',
      subtitle: 'Get in touch for fabric sourcing and bulk inquiries.',
      button: 'Get in Touch'
    },
    footer: {
      desc: 'Leading provider of premium textile solutions for the global market.',
      navTitle: 'Navigation',
      contactTitle: 'Contact Us',
      rights: '© 2026 R-FASHION. All Rights Reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    productsPage: {
      hero: { title: 'Our Collection', subtitle: 'Explore our range of premium fabrics designed for excellence.' },
      labels: {
        searchPlaceholder: 'Search by name, category, or composition...',
        noResults: 'No products found matching your search.',
        back: 'Back to Products',
        width: 'Width',
        gsm: 'Weight (GSM)',
        composition: 'Composition',
        pattern: 'Pattern',
        application: 'Application',
        customization: 'Customization',
        technicalSpecs: 'Technical Specifications',
        inquireNow: 'Inquire Now',
        status: 'Status',
        ready: 'Ready',
        preorder: 'Pre-order',
        weftDensity: 'Weft Density',
        specification: 'Specification'
      }
    },
    aboutPage: {
      hero: { label: 'Our Legacy', title: 'Excellence in Every Thread' },
      intro: {
        title: 'Our Story',
        content1: 'R-FASHION is based in Shaoxing, China — one of the world’s largest textile hubs. With direct access to a strong supply chain, we specialize in sourcing and delivering high-quality fabrics for global markets.',
        content2: 'We focus on reliability, consistent quality, and efficient production, supporting clients from material selection to final delivery.'
      },
      strengths: {
        title: 'Why Choose Us',
        items: [
          { title: 'Global Reach', desc: 'Exporting to over 50 countries with a robust logistics network.' },
          { title: 'Innovation', desc: 'Continuous investment in R&D for functional and sustainable fabrics.' },
          { title: 'Reliability', desc: 'Consistent quality and on-time delivery for large-scale orders.' }
        ]
      },
      warehouse: {
        title: 'Our Warehouse',
        subtitle: 'Ready stock fabrics directly from our Shaoxing warehouse'
      },
      factory: {
        title: 'Our Production Facility',
        subtitle: 'State-of-the-art weaving and finishing factory'
      },
      globalReach: {
        title: 'Global Reach',
        mainTitle: 'Connecting Fabric to the World',
        subtitle: 'Serving clients across Asia, the Middle East, Africa, and South America.',
        hqLabel: 'Shaoxing Headquarters',
        countries: ['Indonesia', 'UAE', 'India', 'Bangladesh', 'Saudi Arabia', 'Egypt', 'Morocco', 'Brazil', 'China']
      }
    },
    contactPage: {
      hero: { title: 'Contact Us', subtitle: 'Get in touch with us for fabric inquiries, bulk orders, or custom solutions.' },
      wechat: { prompt: 'Scan to connect on WeChat' },
      phone: { title: 'Phone Support', number: '+86 153 9587 7079', contactPerson: 'Contact: Winnie' },
      address: { title: 'Headquarters', content: ['123 Textile Avenue', 'Keqiao District, Shaoxing', 'Zhejiang, China'] }
    }
  },
  zh: {
    nav: { home: '首页', products: '产品中心', about: '关于我们', contact: '联系我们' },
    hero: {
      title: '重新定义卓越纺织',
      subtitle: '为全球时尚和工业提供优质面料解决方案。',
      cta: '探索系列'
    },
    features: {
      quality: { title: '卓越品质', desc: '选用最优质的原材料，经过严格的质量控制。' },
      production: { title: '先进生产', desc: '最先进的制造设施，确保生产精度。' },
      custom: { title: '定制方案', desc: '量身定制的面料开发，满足您的特定需求。' }
    },
    products: { title: '精选面料', viewAll: '查看所有产品' },
    about: {
      title: '铸就纺织未来',
      desc1: 'R-FASHION 总部位于中国绍兴——全球最大的纺织枢纽之一。凭借对强大供应链的直接访问，我们专注于为全球市场采购和交付高品质面料。',
      desc2: '我们注重可靠性、稳定的质量和高效的生产，为客户提供从材料选择到最终交付的全方位支持。',
      cta: '品牌故事'
    },
    cta: {
      title: '期待与您合作',
      subtitle: '联系我们获取面料采购和批量咨询。',
      button: '立即联系'
    },
    footer: {
      desc: '全球市场领先的优质纺织解决方案供应商。',
      navTitle: '导航',
      contactTitle: '联系我们',
      rights: '© 2026 R-FASHION. 版权所有。',
      privacy: '隐私政策',
      terms: '服务条款'
    },
    productsPage: {
      hero: { title: '产品系列', subtitle: '探索我们为卓越而设计的各类优质面料。' },
      labels: {
        searchPlaceholder: '按名称、类别或成分搜索...',
        noResults: '未找到匹配的产品。',
        back: '返回产品列表',
        width: '门幅',
        gsm: '克重 (GSM)',
        composition: '成分',
        pattern: '花型',
        application: '用途',
        customization: '定制服务',
        technicalSpecs: '技术参数',
        inquireNow: '立即咨询',
        status: '状态',
        ready: '现货',
        preorder: '预订',
        weftDensity: '纬密',
        specification: '规格'
      }
    },
    aboutPage: {
      hero: { label: '我们的传承', title: '卓越源于每一根纤维' },
      intro: {
        title: '品牌故事',
        content1: 'R-FASHION 总部位于中国绍兴——全球最大的纺织枢纽之一。凭借对强大供应链的直接访问，我们专注于为全球市场采购和交付高品质面料。',
        content2: '我们注重可靠性、稳定的质量和高效的生产，为客户提供从材料选择到最终交付的全方位支持。'
      },
      strengths: {
        title: '为什么选择我们',
        items: [
          { title: '全球视野', desc: '出口至50多个国家，拥有强大的物流网络。' },
          { title: '持续创新', desc: '持续投入研发，开发功能性和可持续面料。' },
          { title: '可靠伙伴', desc: '为大规模订单提供稳定的质量和准时的交货。' }
        ]
      },
      warehouse: {
        title: '我们的仓库',
        subtitle: '从我们的绍兴仓库直接供应现货面料'
      },
      factory: {
        title: '我们的生产工厂',
        subtitle: '先进的织造和后整理工厂'
      },
      globalReach: {
        title: '覆盖全球',
        mainTitle: '连接全球面料',
        subtitle: '服务于亚洲、中东、非洲和南美洲的客户',
        hqLabel: '绍兴总部',
        countries: ['印度尼西亚', '阿联酋', '印度', '孟加拉国', '沙特阿拉伯', '埃及', '摩洛哥', '巴西', '中国']
      }
    },
    contactPage: {
      hero: { title: '联系我们', subtitle: '如有面料咨询、批量订单或定制方案需求，请与我们联系。' },
      wechat: { prompt: '扫码添加微信联系' },
      phone: { title: '电话咨询', number: '+86 153 9587 7079', contactPerson: '联系人：王淑玮' },
      address: { title: '总部地址', content: ['纺织大道123号', '绍兴市柯桥区', '中国浙江'] }
    }
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('zh');

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
