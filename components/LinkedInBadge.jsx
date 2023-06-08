import { useTheme } from 'next-themes'

export const LinkedInBadge = () => {
  const { systemTheme } = useTheme()

  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="large"
      data-theme={systemTheme ?? 'light'}
      data-type="HORIZONTAL"
      data-vanity="jeff-zhen-zhang"
      data-version="v1"
    >
      {/* <a
        className="badge-base__link LI-simple-link"
        href="https://cn.linkedin.com/in/jeff-zhen-zhang?trk=profile-badge"
      >
        Zhen Zhang
      </a> */}
    </div>
  )
}
