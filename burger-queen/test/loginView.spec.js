import React from "react"
import { render } from "@testing-library/react"
import LoginView from "../src/views/loginView"
import { BrowserRouter } from "react-router-dom"
import { describe, test } from 'vitest';

describe('LoginView', () => {
  test('', () => {
    render(<LoginView />)

  })
})