package runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features="Include/features",
glue="",
tags="Positive",
plugin = ["pretty", "html:Report"]
)

public class CucumberRunner {
}