import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import {
  FaDiceD6,
  FaBook,
  FaBaby,
  FaBriefcase,
} from 'react-icons/fa'

const histories = [
  //{
  //  title: 'Your project?',
  //  desc: 'Contact me',
  //  date: 'Today - Acquisition',
  //  icon: FaGithub,
  //},
  {
    title: 'Student Developer',
    desc: 'WEXO',
    date: 'Mar. 2025 - Now',
    icon: FaBriefcase,
    color: 'secondary',
  },
  {
    title: 'Web development',
    desc: 'UCN',
    date: 'Sep. 2024 - Now',
    icon: FaBook,
    color: 'error',
  },
  {
    title: 'Valoks',
    desc: 'Software company',
    date: 'Apr. 2023 - Now',
    icon: FaDiceD6,
    color: 'primary',
  },
  {
    title: 'Touch Grass Store',
    desc: 'Selling artificial grass',
    date: 'Nov. 2022 - Now',
    icon: FaDiceD6,
    color: 'primary',
  },
  {
    title: 'AFK Console Client',
    desc: 'Minecraft AFK Client',
    date: 'Aug. 2022 - Now',
    icon: FaDiceD6,
    color: 'primary',
  },
  {
    title: 'Vue Boilerplate',
    desc: 'SaaS boilerplate in Vue',
    date: 'Oct. 2024 - Nov. 2024',
    icon: FaDiceD6,
    color: 'primary',
  },
  {
    title: 'Student Assistant, IT Development',
    desc: 'Coolshop',
    date: 'Sep. 2024 - Feb. 2025',
    icon: FaBriefcase,
    color: 'secondary',
  },
  {
    title: 'Software Developer',
    desc: 'Coolshop',
    date: 'Aug. 2024 - Aug. 2024',
    icon: FaBriefcase,
    color: 'secondary',
  },
  {
    title: 'Student Assistant, IT Development',
    desc: 'Coolshop',
    date: 'May. 2024 - Jul. 2024',
    icon: FaBriefcase,
    color: 'secondary',
  },
  {
    title: 'Developer Intern',
    desc: 'Coolshop',
    date: 'Jan. 2024 - Mar. 2024',
    icon: FaBriefcase,
    color: 'secondary',
  },
  {
    title: 'Tutor',
    desc: 'UCN',
    date: 'Aug. 2022 - Nov. 2022',
    icon: FaBook,
    color: 'error',
  },
  {
    title: 'Computer Science',
    desc: 'UCN',
    date: 'Feb. 2022 - Jun. 2024',
    icon: FaBook,
    color: 'error',
  },
  {
    title: 'Slinghockey',
    desc: 'Dropshipping boardgames',
    date: 'Nov. 2021 - Feb. 2022',
    icon: FaDiceD6,
    color: 'primary',
  },
  {
    title: 'Innovation & Digitization',
    desc: 'AAU',
    date: 'Sep. 2021 - Feb. 2022',
    icon: FaBook,
    color: 'error',
  },
  {
    title: 'FactionsMerch',
    desc: 'Print on demand merchandise',
    date: 'Mar. 2021 - Jul. 2021',
    icon: FaDiceD6,
    color: 'primary',
  },
  {
    title: 'Grave of Anubis',
    desc: 'A Unity FPS game',
    date: 'Feb. 2021 - May. 2021',
    icon: FaDiceD6,
    color: 'primary',
  },
  {
    title: 'LudoCraft',
    desc: 'Minecraft boardgame',
    date: 'Nov. 2019 - May. 2022',
    icon: FaDiceD6,
    color: 'primary',
  },
  {
    title: 'Advertising',
    desc: 'Selling ads through Discord',
    date: 'Dec. 2018 - Aug. 2019',
    icon: FaDiceD6,
    color: 'primary',
  },
  {
    title: 'SkullWars',
    desc: 'Minecraft server',
    date: 'Oct. 2018 - Oct. 2021',
    icon: FaDiceD6,
    color: 'primary',
  },
  {
    title: 'Communication & IT',
    desc: 'HTX',
    date: 'Aug. 2018 - Aug. 2021',
    icon: FaBook,
    color: 'error',
  },
  {
    title: 'Hello world',
    desc: 'I was born',
    date: 'August 8th, 2001',
    icon: FaBaby,
    color: 'success',
  },
]

const History = () => {
  const historyList = histories.map((history, i) => {
    const IconComponent = history.icon;
    const isNow = !history.date.toLocaleLowerCase().includes('now') ? {color: '#ffffff75'} : {} 
    const isTop = i === 0                                           ? {display: 'none'} : {}
    const isBottom = i === histories.length-1                       ? {display: 'none'} : {}
    return (
      <TimelineItem sx={isNow} key={`${history.title}-${i}`}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          fontSize={10}
        >
          {history.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={isTop} />
          <TimelineDot color={history.color}>
            <IconComponent />
          </TimelineDot>
          <TimelineConnector sx={isBottom} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='break-all' variant="h6" component="span" fontWeight={600}>
            {history.title}
          </Typography>
          <Typography fontSize={13}>{history.desc}</Typography>
        </TimelineContent>
      </TimelineItem>
    )
  })

  return (
    <div className='py-32 p-4 max-w-[1440px] m-auto'>
      <h2 className='text-center font-bold text-2xl pb-4'>Timeline</h2>
      <Timeline position="right">
        {historyList}      
      </Timeline>
    </div>
  )
}

export default History