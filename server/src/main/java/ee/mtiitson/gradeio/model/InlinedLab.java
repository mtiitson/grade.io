package ee.mtiitson.gradeio.model;

import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.Set;

@Projection(name = "inline", types = Lab.class)
public interface InlinedLab {

    long getId();

    Date getCreationDate();

    String submission();

    Set<Person> getAuthors();

    LabName getLabName();

    Grade getGrade();

    boolean isGraded();
}
