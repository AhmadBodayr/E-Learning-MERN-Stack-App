import { useContext } from 'react'
import CurrentViewContext from '../../context/CurrentViewContext';
import UserInfoContext from '../../context/UserInfoContext';
import MainNavListItem from './MainNavListItem'
import MainNavListSeparator from './MainNavListSeparator'

const MainNavList = () => {
    const { user } = useContext(UserInfoContext);
    const { view } = useContext(CurrentViewContext);
    // var conditional = (view === 'guest') ? 'absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2' : '';
    return (
        <ul className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6`}>
            <MainNavListItem
                text={"Home"}
                href="#"
                myIdx={0}
            />
            <MainNavListSeparator />
            <MainNavListItem
                text={"Categories"}
                href="#"
                myIdx={1}
            />
            {/* <MainNavListSeparator />
            <MainNavListItem
                text={"Services"}
                href="#"
                myIdx={2}
            /> */}
            {
                (user.role === 'individualTrainee' || user.role === 'corporateTrainee' || user.role === 'instructor')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Report Problem"}
                            href="#"
                            myIdx={4}
                        />
                    </>
                    : ''
            }
            {
                (user.role === 'instructor')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Courses I Teach"}
                            href="#"
                            myIdx={64} />
                    </>
                    : ''
            }
            {
                (user.role === 'instructor')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Reviews"}
                            href="#"
                            myIdx={65} />
                    </>
                    : ''
            }
            {
                (user.role === 'instructor')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Create Course"}
                            href="#"
                            myIdx={66} />
                    </>
                    : ''
            }
            {
                (user.role === 'instructor')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Add Section"}
                            href="#"
                            myIdx={67} />
                    </>
                    : ''
            }
            {/* {
                (user.role === 'instructor')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Add Test"}
                            href="#"
                            myIdx={68} />
                    </>
                    : ''
            } */}
            {
                (user.role === 'admin')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Admin Dashboard"}
                            href="#"
                            myIdx={128} />
                    </>
                    : ''
            }
            {
                (user.role === 'admin')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"View Reported Problems"}
                            href="#"
                            myIdx={129} />
                    </>
                    : ''
            }
            {
                (user.role === 'admin')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"View Course Requests"}
                            href="#"
                            myIdx={130} />
                    </>
                    : ''
            }
            {
                (user.role === 'admin' || user.role === 'instructor')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Set a Promotion"}
                            href="#"
                            myIdx={131} />
                    </>
                    : ''
            }
            {
                (user.role === 'corporateTrainee')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Request Course access"}
                            href="#"
                            myIdx={256} />
                    </>
                    : ''
            }
            {
                (user.role === 'individualTrainee' || user.role === 'corporateTrainee')
                    ?
                    <>
                        <MainNavListSeparator />
                        <MainNavListItem
                            text={"Courses I Take"}
                            href="#"
                            myIdx={512} />
                    </>
                    : ''
            }
            {/* <>
                <MainNavListSeparator />
                <MainNavListItem
                    text={"Most Popular"}
                    href="#"
                    myIdx={1024} />
            </> */}
        </ul>
    )
}

export default MainNavList