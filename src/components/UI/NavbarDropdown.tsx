'use client'
import { useUser } from '@/src/context/user.provider'
import { logout } from '@/src/services/AuthService'
import { Avatar } from '@nextui-org/avatar'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/dropdown'
import { useRouter } from 'next/navigation'
const NavbarDropdown = () => {
  const { setIsLoading: userLoading } = useUser()

  const router = useRouter()

  const handleNavigation = (pathName: string) => {
    router.push(pathName)
  }

  const handleLogout = () => {
    logout()
    userLoading(true)
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className='cursor-pointer' name={'Noor'} />
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
