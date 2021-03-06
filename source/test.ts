// Import
import { equal } from 'assert-helpers'
import { getRepos, getReposFromUsers } from './index.js'
import kava from 'kava'

// Test
kava.suite('getrepos', function (suite, test) {
	test('repos', function (done) {
		getRepos(['bevry/getcontributors', 'bevry/getrepos'])
			.then(function (result) {
				equal(Array.isArray(result), true, 'result is array')
				equal(
					result.length > 0,
					true,
					`length to be more than 0, it was ${result.length}`
				)
				done()
			})
			.catch(done)
	})

	// Fetch all the contributors on these github users/organisations
	test('users', function (done) {
		getReposFromUsers(['browserstate'])
			.then(function (result) {
				equal(Array.isArray(result), true, 'result is array')
				equal(
					result.length > 0,
					true,
					`length to be more than 0, it was ${result.length}`
				)
				done()
			})
			.catch(done)
	})
})
