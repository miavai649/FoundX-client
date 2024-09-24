'use client'
import { protectedRoutes } from '@/src/constant'
import { useUser } from '@/src/context/user.provider'
import { logout } from '@/src/services/AuthService'
import { Avatar } from '@nextui-org/avatar'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/dropdown'
import { usePathname, useRouter } from 'next/navigation'
const NavbarDropdown = () => {
  const { user, setIsLoading: userLoading } = useUser()

  const router = useRouter()
  const pathName = usePathname()
  console.log('🚀 ~ NavbarDropdown ~ pathName:', pathName)

  const handleNavigation = (pathName: string) => {
    router.push(pathName)
  }

  const handleLogout = () => {
    logout()
    userLoading(true)

    if (protectedRoutes.some((route) => pathName.match(route))) {
      router.push('/')
    }
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className='cursor-pointer' src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        <DropdownItem onClick={() => handleNavigation('/profile')}>
          Profile
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation('/profile/settings')}>
          Settings
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation('/profile/create-post')}>
          Create Post
        </DropdownItem>
        <DropdownItem
          onClick={() => handleLogout()}
          key='delete'
          className='text-danger'
          color='danger'>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default NavbarDropdown
