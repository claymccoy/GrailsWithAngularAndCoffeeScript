package geb

import geb.spock.GebReportingSpec

// Allows Geb Specs to find the config and run from an IDE
class GebSpecWithDefaultConfig extends GebReportingSpec {

    @Override Configuration createConf() {
        ConfigurationLoader loader = new ConfigurationLoader(gebConfEnv)
        Configuration config = loader.getConf(gebConfScript)
        if (!config.reportsDir) {
            config = loader.getConf(new File('./test/functional/GebConfig.groovy').toURL(), new GroovyClassLoader())
        }
        return config
    }
}
