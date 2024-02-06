

interface PlatformLayoutProps { 
  children: React.ReactNode
}

const PlatformLayout = ({ 
  children
}: PlatformLayoutProps) => {
  return (
    <div>
      { children }
    </div>
  )
}

export default PlatformLayout