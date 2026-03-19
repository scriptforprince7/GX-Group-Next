// Mock data for demo purposes
export const mockData = {
  global: {
    data: {
      attributes: {
        siteName: "GX Group",
        siteDescription: "Enterprise Solutions & Technology",
        favicon: {
          data: {
            attributes: {
              url: "/favicon.ico"
            }
          }
        }
      }
    }
  },
  
  'blog-page': {
    data: {
      attributes: {
        heading: "Our Blog",
        sub_heading: "Latest insights and updates",
        seo: {
          metaTitle: "Blog - GX Group",
          metaDescription: "Read our latest articles"
        }
      }
    }
  },

  'product-page': {
    data: {
      attributes: {
        heading: "Our Products",
        sub_heading: "Enterprise-grade solutions",
        featured_heading: "Featured Products",
        featured_sub_heading: "Top solutions for your business",
        popular_heading: "Popular Products", 
        popular_sub_heading: "Most trusted solutions",
        seo: {
          metaTitle: "Products - GX Group",
          metaDescription: "Explore our enterprise products"
        }
      }
    }
  },

  article: {
    data: [
      {
        id: 1,
        attributes: {
          title: "Enterprise Digital Transformation",
          slug: "enterprise-digital-transformation",
          excerpt: "Learn how modern enterprises are embracing digital transformation",
          content: "Full article content about digital transformation...",
          publishedAt: "2024-01-15T10:00:00Z",
          author: {
            data: {
              attributes: {
                name: "GX Team",
                avatar: {
                  data: {
                    attributes: {
                      url: "/images/avatar.jpg"
                    }
                  }
                }
              }
            }
          },
          coverImage: {
            data: {
              attributes: {
                url: "https://images.pexels.com/photos/5326748/pexels-photo-5326748.jpeg"
              }
            }
          }
        }
      }
    ]
  },

  products: {
    data: [
      {
        id: 1,
        attributes: {
          name: "NETRA Platform",
          slug: "netra-platform",
          description: "Advanced network monitoring and management platform",
          price: "$299/month",
          featured: true,
          images: {
            data: [
              {
                attributes: {
                  url: "https://images.pexels.com/photos/6099232/pexels-photo-6099232.jpeg"
                }
              }
            ]
          }
        }
      },
      {
        id: 2,
        attributes: {
          name: "MayaOS Router",
          slug: "mayaos-router", 
          description: "High-performance enterprise routing solution",
          price: "$199/month",
          featured: true,
          images: {
            data: [
              {
                attributes: {
                  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_K8tKyOy1HisYY8DpQV2ORt0DzVEAdl8-UA&s"
                }
              }
            ]
          }
        }
      }
    ]
  }
};

export async function fetchMockData(type: string, options: any = {}) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return mockData[type as keyof typeof mockData] || { data: [] };
}

export async function fetchMockSingle(type: string, options: any = {}) {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return mockData[type as keyof typeof mockData] || { data: null };
}
