import dynamic from 'next/dynamic'

import { OUR_TEAM_META } from '@/constants'
import { Main, Meta } from '@/layouts'

const OurTeamComponent = dynamic(() => import('../../containers/OurTeam'), {
  suspense: true
})

interface IProps {}

const OurTeam: React.FC<IProps> = (): JSX.Element => (
  <Main
    meta={
      <Meta
        title={OUR_TEAM_META.title}
        description={OUR_TEAM_META.description}
        keyword={OUR_TEAM_META.keyword}
        website={OUR_TEAM_META.website}
        twitter_site={OUR_TEAM_META.twitter_site}
        twitter_id={OUR_TEAM_META.twitter_id}
        twitter_creator={OUR_TEAM_META.twitter_creator}
        twitter_image={OUR_TEAM_META.twitter_image}
      />
    }
  >
    <OurTeamComponent />
  </Main>
)

export default OurTeam
