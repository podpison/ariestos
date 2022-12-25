import { Separator } from "../../ui/Separator"

const items = [
  {
    name: 'ATOMIN',
    icon: '',
    description: {
      heading: 'Genius minds behind this program for you',
      description: 'We are a group of engineers, designers and entrepreneurs brought together to support early stage startups working on artificial intelligence.'
    },
    team: {
      leader: {
        src: 'https://postimg.cc/bZVWFgS4',
        name: 'Edris Alba'
      },
      co: {
        src: 'https://postimg.cc/cvLPm2CQ',
        name: 'Mark Rafello'
      },
      marketing: {
        src: 'https://postimg.cc/tYyK1YHv',
        name: 'Chris Rogers'
      }, 
      technician: {
        src: 'https://postimg.cc/Xp8T94jj',
        name: 'Roberto Simioni'
      }
    }
  },
  {
    name: 'ORACLE',
    icon: '',
    description: {
      heading: 'Genius minds behind this program for you',
      description: 'We are a group of engineers, designers and entrepreneurs brought together to support early stage startups working on artificial intelligence.'
    },
    team: {
      leader: {
        src: 'https://postimg.cc/bZVWFgS4',
        name: 'Edris Alba'
      },
      co: {
        src: 'https://postimg.cc/cvLPm2CQ',
        name: 'Mark Rafello'
      },
      marketing: {
        src: 'https://postimg.cc/tYyK1YHv',
        name: 'Chris Rogers'
      }, 
      technician: {
        src: 'https://postimg.cc/Xp8T94jj',
        name: 'Roberto Simioni'
      }
    }
  },
  {
    name: 'JARVICE',
    icon: '',
    description: {
      heading: 'Genius minds behind this program for you',
      description: 'We are a group of engineers, designers and entrepreneurs brought together to support early stage startups working on artificial intelligence.'
    },
    team: {
      leader: {
        src: 'https://postimg.cc/bZVWFgS4',
        name: 'Edris Alba'
      },
      co: {
        src: 'https://postimg.cc/cvLPm2CQ',
        name: 'Mark Rafello'
      },
      marketing: {
        src: 'https://postimg.cc/tYyK1YHv',
        name: 'Chris Rogers'
      }, 
      technician: {
        src: 'https://postimg.cc/Xp8T94jj',
        name: 'Roberto Simioni'
      }
    }
  },
  {
    name: 'RAXON',
    icon: '',
    description: {
      heading: 'Genius minds behind this program for you',
      description: 'We are a group of engineers, designers and entrepreneurs brought together to support early stage startups working on artificial intelligence.'
    },
    team: {
      leader: {
        src: 'https://postimg.cc/bZVWFgS4',
        name: 'Edris Alba'
      },
      co: {
        src: 'https://postimg.cc/cvLPm2CQ',
        name: 'Mark Rafello'
      },
      marketing: {
        src: 'https://postimg.cc/tYyK1YHv',
        name: 'Chris Rogers'
      }, 
      technician: {
        src: 'https://postimg.cc/Xp8T94jj',
        name: 'Roberto Simioni'
      }
    }
  },
  {
    name: 'TINDO',
    icon: '',
    description: {
      heading: 'Genius minds behind this program for you',
      description: 'We are a group of engineers, designers and entrepreneurs brought together to support early stage startups working on artificial intelligence.'
    },
    team: {
      leader: {
        src: 'https://postimg.cc/bZVWFgS4',
        name: 'Edris Alba'
      },
      co: {
        src: 'https://postimg.cc/cvLPm2CQ',
        name: 'Mark Rafello'
      },
      marketing: {
        src: 'https://postimg.cc/tYyK1YHv',
        name: 'Chris Rogers'
      }, 
      technician: {
        src: 'https://postimg.cc/Xp8T94jj',
        name: 'Roberto Simioni'
      }
    }
  },
  {
    name: 'KAWASKI',
    icon: '',
    description: {
      heading: 'Genius minds behind this program for you',
      description: 'We are a group of engineers, designers and entrepreneurs brought together to support early stage startups working on artificial intelligence.'
    },
    team: {
      leader: {
        src: 'https://postimg.cc/bZVWFgS4',
        name: 'Edris Alba'
      },
      co: {
        src: 'https://postimg.cc/cvLPm2CQ',
        name: 'Mark Rafello'
      },
      marketing: {
        src: 'https://postimg.cc/tYyK1YHv',
        name: 'Chris Rogers'
      }, 
      technician: {
        src: 'https://postimg.cc/Xp8T94jj',
        name: 'Roberto Simioni'
      }
    }
  },
  {
    name: 'CYPHER',
    icon: '',
    description: {
      heading: 'Genius minds behind this program for you',
      description: 'We are a group of engineers, designers and entrepreneurs brought together to support early stage startups working on artificial intelligence.'
    },
    team: {
      leader: {
        src: 'https://postimg.cc/bZVWFgS4',
        name: 'Edris Alba'
      },
      co: {
        src: 'https://postimg.cc/cvLPm2CQ',
        name: 'Mark Rafello'
      },
      marketing: {
        src: 'https://postimg.cc/tYyK1YHv',
        name: 'Chris Rogers'
      }, 
      technician: {
        src: 'https://postimg.cc/Xp8T94jj',
        name: 'Roberto Simioni'
      }
    }
  },
  {
    name: 'ORDIX',
    icon: '',
    description: {
      heading: 'Genius minds behind this program for you',
      description: 'We are a group of engineers, designers and entrepreneurs brought together to support early stage startups working on artificial intelligence.'
    },
    team: {
      leader: {
        src: 'https://postimg.cc/bZVWFgS4',
        name: 'Edris Alba'
      },
      co: {
        src: 'https://postimg.cc/cvLPm2CQ',
        name: 'Mark Rafello'
      },
      marketing: {
        src: 'https://postimg.cc/tYyK1YHv',
        name: 'Chris Rogers'
      }, 
      technician: {
        src: 'https://postimg.cc/Xp8T94jj',
        name: 'Roberto Simioni'
      }
    }
  },
]

export const InvestmentPortfolios: React.FC = () => {
  let Logos = items.map((i, index) => <p key={index}>{i.name}</p>)

  return <section className="mt-24">
    <Separator className="w-full h-[1px]" />
    <h2 className='mt-5'>Our investment portfolios</h2>
    <div className="grid grid-cols-2 mt-14">
      {Logos}
    </div>
  </section>
};