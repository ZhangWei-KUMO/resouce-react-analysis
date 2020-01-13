const semver = require('semver')
// 对版本号的验证，如果返回null，则表示验证失败
const version_a = semver.valid('1.2.3');
/**
 * 第二个参数是release类型 分为：
 * major，premajor，minor，preminor，patch，prepatch，prerelease
 */
const version_b = semver.inc("1.2.0", "prerelease", "alpha")
const version_c = semver.prerelease('1.2.3-alpha.8');
console.log(version_c)