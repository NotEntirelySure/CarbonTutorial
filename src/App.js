import React, {useState, useEffect} from "react";
import {
  Button,
  Form,
  NumberInput,
  Header,
  HeaderContainer,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderPanel,
  HeaderSideNavItems,
  RadioButtonGroup,
  RadioButton,
  Select,
  SelectItem,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  Stack,
  TextInput,
  TextArea,
  Content
} from '@carbon/react';
import {
  Search,
  Notification,
  Fade,
  Switcher
} from '@carbon/icons-react';
import './App.scss';

export default function App() {
  
  const PageForm = () => {
    return (
      <>
        <div className="pageForm">
          <Form>
            <Stack gap={7}>
              <NumberInput/>
              <RadioButtonGroup
                name="radio-button-group"
                defaultSelected="default-selected"
                legendText="Radio Button heading">
                <RadioButton
                  value="standard"
                  id="radio-1"
                  labelText="Standard Radio Button"
                  />
                <RadioButton
                  value="default-selected"
                  labelText="Default Selected Radio Button"
                  id="radio-2"
                  />
                <RadioButton
                  value="blue"
                  labelText="Standard Radio Button"
                  id="radio-3"
                  />
                <RadioButton
                  value="disabled"
                  labelText="Disabled Radio Button"
                  id="radio-4"
                  disabled
                  />
              </RadioButtonGroup>
              <Select id="select-1" defaultValue="placeholder-item">
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Choose an option"
                  />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
              </Select>
              <TextInput />
              <TextInput
                type="password"
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                />
              <TextInput
                type="password"
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                />
              <TextArea/>
              <Button type="submit" className="some-class">
                Submit
              </Button>
            </Stack>
          </Form>
        </div>
      </>
    )
  }

  return (
    <div className="mainContent">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="IBM Platform Name">
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="IBM">
                [Platform]
              </HeaderName>
              <HeaderGlobalBar>
              <HeaderGlobalAction
                  aria-label="Search"
                  onClick={()=>{}}>
                  <Search size={20} />
              </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="Notifications"
                  onClick={()=>{}}>
                  <Notification size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  onClick={()=>{}}
                  tooltipAlignment="end">
                  <Switcher size={20} />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                <SideNavItems>
                  <HeaderSideNavItems hasDivider={true}>
                    <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                    <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                    <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                      <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                      <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                      <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                    </HeaderMenu>
                  </HeaderSideNavItems>
                  <SideNavMenu renderIcon={Fade} title="Category title">
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                  </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu renderIcon={Fade} title="Category title">
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu
                    renderIcon={Fade}
                    title="Category title"
                    isActive={true}
                  >
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      aria-current="page"
                      href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                      Link
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavLink
                    renderIcon={Fade}
                    href="https://www.carbondesignsystem.com/"
                  >
                    Link
                  </SideNavLink>
                  <SideNavLink
                    renderIcon={Fade}
                    href="https://www.carbondesignsystem.com/"
                  >
                    Link
                  </SideNavLink>
                </SideNavItems>
              </SideNav>
            </Header>
            <HeaderPanel aria-label="App Switcher" expanded={true} />
            <HeaderPanel aria-label="notifications" expanded={false} />
            <Content children={<PageForm/>}/>
          </>
        )}
      /> 
    </div>
  );
}