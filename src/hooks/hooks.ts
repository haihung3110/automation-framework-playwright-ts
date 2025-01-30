import { After, AfterAll, Before, BeforeAll } from '@cucumber/cucumber'

BeforeAll(async () => {
  console.log('Running before all tests')
  // Add your setup code here
})

Before(async () => {
  console.log('Running before each test')
  // Add your setup code here
})

After(async () => {
  console.log('Running after each test')
  // Add your teardown code here
})

AfterAll(async () => {
  console.log('Running after all tests')
  // Add your teardown code here
})
