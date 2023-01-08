import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { itemsAPI } from "../../api";

export type TextType = {
  name: string
  items: string[]
}

export type StartupType = {
  mainImg: string
  smallImg: string
  name: string
  heading: string
  description: string
  rtl: boolean //right to left
  year: number
  shortDescription: string
  category: string
  content: {
    texts: (TextType | string)[]
    website: string
  }
}

export type InvestmentPortfolioTeamItemType = {
  src: string
  role: string
  name: string
  linkedin: string
  description: string[]
}

export type InvestmentPortfolioType = {
  name: string
  icon: string
  description: {
    heading: string
    description: string
  };
  team: InvestmentPortfolioTeamItemType[]
}

export type JobType = {
  id: number
  portfolio: string
  name: string
  keyWords: string[]
  category: string
  publishDate: string
  applicationsCount: number
  location: string
  skills: {
    experience: string
    workLevel: string
    employeeType: string
    offerSalary: number
  }
  description: {
    overview: string[]
    jobDescription: string[]
    responsibilities: string[]
    skills: string[]
  }
}

export type TermsAndConditionItemCategoryType = {
  name: string
  items: string[]
}

export type TermsAndConditionItemType = {
  section: string
  content: TermsAndConditionItemCategoryType[]
}

export type BlogItemType = {
  id: number
  preview: string
  date: string
  name: string
  author: {
    img: string
    name: string
    profession: string
  }
  content: string[]
}

export type BlogCategoryType = {
  category: string;
  items: BlogItemType[]
}

const dada = [
  {
    category: 'trends & insights.',
    items: [
      {
        id: 0,
        preview: 'https://i.postimg.cc/02rZjh9D/image.webp',
        date: '07.09.2021',
        name: 'vertical Farming at it’s highest. Nothing has grown like this in decades',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
      {
        id: 1,
        preview: 'https://i.postimg.cc/pLh0G47R/image-1.webp',
        date: '07.09.2021',
        name: 'They are saying this is the future of bio-tech.',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
      {
        id: 2,
        preview: 'https://i.postimg.cc/3xstP95p/image-2.webp',
        date: '07.09.2021',
        name: '              Sound of future & noise cancelling of the decade.',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
      {
        id: 3,
        preview: 'https://i.postimg.cc/pLh0G47R/image-1.webp',
        date: '07.09.2021',
        name: 'Covid-19 Is Rapidly Accelerating Digital Health Adoption.',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
      {
        id: 4,
        preview: 'https://i.postimg.cc/02rZjh9D/image.webp',
        date: '07.09.2021',
        name: 'Covid-19 Is Rapidly Accelerating Digital Health Adoption.',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
    ]
  },
  {
    category: 'portfolio news.',
    items: [
      {
        id: 5,
        preview: 'https://i.postimg.cc/fbY8ZXDP/image-3.webp',
        date: '07.09.2021',
        name: 'vertical Farming at it’s highest. Nothing has grown like this in decades',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
      {
        id: 6,
        preview: 'https://i.postimg.cc/xCRgN2ky/image-4.webp',
        date: '07.09.2021',
        name: 'They are saying this is the future of bio-tech.',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
      {
        id: 7,
        preview: 'https://i.postimg.cc/SsqDKsKx/image-5.webp',
        date: '07.09.2021',
        name: '              Sound of future & noise cancelling of the decade.',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
      {
        id: 8,
        preview: 'https://i.postimg.cc/xCRgN2ky/image-4.webp',
        date: '07.09.2021',
        name: 'Covid-19 Is Rapidly Accelerating Digital Health Adoption.',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
      {
        id: 9,
        preview: 'https://i.postimg.cc/fbY8ZXDP/image-3.webp',
        date: '07.09.2021',
        name: 'Covid-19 Is Rapidly Accelerating Digital Health Adoption.',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
    ]
  },
  {
    category: 'aries toolkit.',
    items: [
      {
        id: 10,
        preview: 'https://i.postimg.cc/GtmKk5G0/image-6.webp',
        date: '07.09.2021',
        name: 'vertical Farming at it’s highest. Nothing has grown like this in decades',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
      {
        id: 11,
        preview: 'https://i.postimg.cc/fW8BwMQM/image-7.webp',
        date: '07.09.2021',
        name: 'They are saying this is the future of bio-tech.',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
      {
        id: 12,
        preview: 'https://i.postimg.cc/ZnscjxxW/image-8.webp',
        date: '07.09.2021',
        name: '              Sound of future & noise cancelling of the decade.',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
      {
        id: 13,
        preview: 'https://i.postimg.cc/fW8BwMQM/image-7.webp',
        date: '07.09.2021',
        name: 'Covid-19 Is Rapidly Accelerating Digital Health Adoption.',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
      {
        id: 14,
        preview: 'https://i.postimg.cc/GtmKk5G0/image-6.webp',
        date: '07.09.2021',
        name: 'Covid-19 Is Rapidly Accelerating Digital Health Adoption.',
        author: {
          img: 'https://i.postimg.cc/Xq95BKDM/Rectangle-163.webp',
          name: 'Dylan J Crow',
          profession: 'Associate'
        },
        content: [
          'The novel coronavirus SARS-CoV-2 spread fast and wide, causing much damage to human health and wellbeing across the globe. Fortunately, science also moved fast. Several working vaccines against COVID-19 have been developed within a year at unprecedented speed, and inoculation programs, together with improving patient treatments and regular testing, point to a way out of this pandemic. There are no guarantees we’ll be able to return to a normal life soon though and the virus can still test us with new local outbreaks and dangerous mutations. ',
          'A continuing global collaboration to keep track of the virus, and renewed efforts to ensure that all of the world’s population is signed up to vaccine programs and can benefit from accumulating knowledge on the disease, seem essential. The risks posed by coronavirus will be with us for a long time and preparations for fighting outbreaks. Researchers from many fields are responding to this call. In a workshop last summer organized by the National Academy of Engineers (NAE) and Computing Community Consortium (CCC), scientists, frontline health workers, and public health and safety experts came together, virtually of course, to discuss the role of robotics in infectious diseases.',
          'Robotics can be of crucial help to look after patients while minimizing spread of infection and protecting healthcare staff. However, to play a significant role in future crises, developments should be strategically planned now and in collaboration with healthcare workers and hospitals. In a Comment in this issue, Hao Su et al. describe a vision for robots that can be **deployed for physical human–robot interaction applications in healthcare.**',
          'Another focus area is the development of machine learning models to help in the diagnosis and prognosis of COVID-19. However, while model development can be very fast, frontline healthcare environments cannot benefit from these advances without more attention on the longer process of rigorous validation and adaptation to local healthcare. **An Analysis in this issue by Michael Roberts et al.** reviews all preprints and papers published since the outbreak of COVID-19 up to 3 October 2020 on detection and prognostication based on clinical chest X-ray and computed tomography (CT) imaging. The hard lesson found by the authors is that none of the developed models, at least so far, can be of potential clinical use due to methodological flaws and high or unclear risk of bias in the datasets used. The authors offer recommendations for improving the quality of models, such as the use of a well-curated external validation set.',
          'Ultimately, deciding which drugs to develop and trial will be made by clinicians. But AI can help identify candidate drugs and treatments, and can even take some of the burden of clinical trials, which is especially useful for a new disease such as COVID-19 that is not yet well understood and has complex biological and clinical symptoms. **Randomized clinical trials on repurposed drugs can be simulated by data-driven methods and computer models by processing existing data such as medical health records and insurance claims retrospectively.**',
          'We’re in for the long haul in the battle to control COVID-19. But some optimism is warranted, with scientific research well placed to prepare for future . all this text is taken from some website and all right reserved by the owner of websites.',
        ]
      },
    ]
  },
]

const initialState = {
  startups: [] as StartupType[],
  investmentPortfolios: [] as InvestmentPortfolioType[],
  jobs: [] as JobType[],
  termsAndConditionItems: [] as TermsAndConditionItemType[],
  blog: dada as BlogCategoryType[],
};

export type StateKeysType = keyof typeof initialState

type SetStaticItemsType = {
  items: DocumentData[]
  key: StateKeysType
}

const setStaticItems = createAction<SetStaticItemsType>('static/setItems');

export const staticReducer = createReducer(initialState, builder => {
  builder.addCase(setStaticItems, (state, action) => {
    type KeyType = typeof action.payload.key;

    return {
      ...state,
      [action.payload.key]: action.payload.items as typeof initialState[KeyType]
    }
  });
  builder.addDefaultCase(() => { });
});

export const getStaticItems = createAsyncThunk('static/getItems', async (collection: StateKeysType, thunkAPI) => {
  let items = await itemsAPI.get(collection);
  thunkAPI.dispatch(setStaticItems({ items, key: collection }));
});