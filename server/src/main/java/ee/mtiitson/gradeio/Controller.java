package ee.mtiitson.gradeio;

import ee.mtiitson.gradeio.model.LabName;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class Controller {

    @RequestMapping("/labNames")
    public LabName[] labNames() {
        return LabName.values();
    }

    @RequestMapping("/grades")
    public String  gradesStub() {
        return "[ { \"name\": \"Villu Tatt\", \"labs\": 1, \"prototypes\": [ 14, 0 ], \"quiz\": 20 }, { \"name\": \"Lihtne Mees\", \"labs\": 4, \"prototypes\": [ 14, 0 ], \"quiz\": 20 }, { \"name\": \"Robin Son\", \"labs\": 8, \"prototypes\": [ 14, 2 ], \"quiz\": 20 }, { \"name\": \"Minni Mann\", \"labs\": 1, \"prototypes\": [ 14, 0 ], \"quiz\": 20 } ]";
    }
}
