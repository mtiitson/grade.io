package ee.mtiitson.gradeio.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.AUTO;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Grade {

    @Id
    @GeneratedValue(strategy = AUTO)
    private long id;


    @OneToOne(mappedBy = "grade", fetch = LAZY)
    @JsonManagedReference
    private Work work;

    @OneToMany
    @JoinColumn(name = "GRADE_ID")
    private List<Criterion> criteria = new ArrayList<>();
}
