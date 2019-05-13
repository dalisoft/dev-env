import React from "react"
import { create } from "react-test-renderer"
import layout from "./layout"

const { CI } = process.env
describe("Button component", () => {
  if (!CI) {
    test("render correctly component", () => {
      const PageLayoutComponent = create(<layout />)
      expect(PageLayoutComponent).toMatchSnapshot()
    })
  }
  test("it shows the expected text when rendered", () => {
    const PageLayoutComponent = create(<layout>MY_CHILD_TEXT</layout>)
    const PageLayoutComponentInstance = PageLayoutComponent.root
    expect(PageLayoutComponentInstance.props.children).toBe("MY_CHILD_TEXT")
  })
})
