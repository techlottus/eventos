import { fetchStrapiGraphQL } from "@/utils/getStrapi";



export type EventHomeType = {
  eventList: {
    data: EventListAttributes
  };
  events: {
    data: EventAttributes[];
  }
}
export type EventListAttributes = {
  attributes: {
    title: string
    banner: {
      title: string
      subtitle: string
      desktopRatio: string
      tabletRatio: string
      mobileRatio: string
      desktopImage: {
        data: {
          attributes: {
            url: string
          }
        }
      }
      tabletImage: {
        data: {
          attributes: {
            url: string
          }
        }
      }
      mobileImage: {
        data: {
          attributes: {
            url: string
          }
        }
      }
      textPosition: string
      ctaUrl: string
      ctaText: string
      contentVariant: string
      overlay: string
    }
    description: string;
    seo: {
      metaTitle: string
      metaDescription: string
      metaImage: {
        data: {
          attributes: {
            url: string
          }
        }
      }
      canonicalURL: string
      metaRobots: string
      keywords: string
    };
    slug: string
  }
}
export type EventAttributes = {
  id: string
  attributes: {
    name: string
    desktop_image: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    start_datetime: string
    end_datetime: string
    register_start_datetime: string
    register_end_datetime: string
    status: string
    is_private: boolean
    category: {
      data: {
        attributes: {
          name: string
        }
      }
    }
  }
}


export const getEventHome = async () => {
  const response = await fetchStrapiGraphQL<EventHomeType>(EVENT_HOME);

  return response;
};

export const EVENT_HOME = `
query {
  eventList {
    data {
      attributes {
        title
        banner {
          title
          subtitle
          desktopRatio
          tabletRatio
          mobileRatio
          desktopImage {
            data {
              attributes {
                url
              }
            }
          }
          tabletImage {
            data {
              attributes {
                url
              }
            }
          }
          mobileImage {
            data {
              attributes {
                url
              }
            }
          }
          textPosition
          ctaUrl
          ctaText
          contentVariant
          overlay
        }
        description
        seo {
          metaTitle
          canonicalURL
          keywords
          metaImage {
            data {
              attributes {
                url
              }
            }
          }
          metaSocial {
            description
            socialNetwork
          }
          metaRobots
          metaDescription
        }
        slug
      }
    }
  }

  events(
    filters: { or: [{ status: { eq: "active" } }, { status: { eq: "draft" } }] }
    pagination: { start: 0, limit: -1 }
  ) {
    data {
      id
      attributes {
        name
        desktop_image {
          data {
            attributes {
              url
            }
          }
        }
        start_datetime
        end_datetime
        register_start_datetime
        register_end_datetime
        status
        is_private
        category {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
`;

export default getEventHome;
