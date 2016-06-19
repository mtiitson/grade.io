package ee.mtiitson.gradeio.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import ee.mtiitson.gradeio.repository.StudentRepository;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Set;

import static javax.persistence.FetchType.LAZY;

@DiscriminatorValue("STUDENT")
@Entity
@JsonTypeName("student")
public class Student extends Person {

    public Student(String name) {
        super(name);
    }

    public Student() {
        super();
    }

    @ManyToMany(mappedBy = "authors", fetch = LAZY)
    @Getter
    @Setter
    private Set<Lab> labs;

}
